from flask import Flask, Response
import cv2
import numpy as np
import mediapipe as mp
from tensorflow.keras.models import load_model
from flask_sockets import Sockets
import json

app = Flask(__name__)
sockets = Sockets(app)

# Initialize MediaPipe
mpHands = mp.solutions.hands
hands = mpHands.Hands(max_num_hands=1, min_detection_confidence=0.7)
mpDraw = mp.solutions.drawing_utils

# Load the gesture recognizer model
model = load_model('mp_hand_gesture')

# Load class names
with open('gesture.names', 'r') as f:
    classNames = f.read().split('\n')

@sockets.route('/ws')
def ws_handler(ws):
    while not ws.closed:
        success, frame = cap.read()
        if not success:
            break
        else:
            x, y, c = frame.shape

            # Flip the frame vertically
            frame = cv2.flip(frame, 1)
            framergb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

            # Get hand landmark prediction
            result = hands.process(framergb)

            gesture_name = ''

            # Post-process the result
            if result.multi_hand_landmarks:
                landmarks = []
                for handslms in result.multi_hand_landmarks:
                    for lm in handslms.landmark:
                        lmx = int(lm.x * x)
                        lmy = int(lm.y * y)
                        landmarks.append([lmx, lmy])

                    # Drawing landmarks on frames
                    mpDraw.draw_landmarks(frame, handslms, mpHands.HAND_CONNECTIONS)

                    # Predict gesture
                    prediction = model.predict([landmarks])
                    classID = np.argmax(prediction)
                    gesture_name = classNames[classID]

            # Send gesture name over WebSocket
            ws.send(json.dumps({'gesture': gesture_name}))

@app.route('/')
def index():
    return 'This is the Flask backend for gesture recognition.'

if __name__ == '__main__':
    from gevent import pywsgi
    from geventwebsocket.handler import WebSocketHandler
    server = pywsgi.WSGIServer(('localhost', 5000), app, handler_class=WebSocketHandler)
    server.serve_forever()
