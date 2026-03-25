#!/bin/bash
echo "Installing ABP Terminal..."

pkg update -y
pkg upgrade -y
pkg install python git -y

pip install fastapi uvicorn websockets python-multipart

echo "Installation complete."
