"use client"
import Image from "next/image";
import { useState } from "react";
import axios from 'axios';
import Webcam from "react-webcam";
import Camera from "./components/camera";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Camera/>
    </main>
  );
}
