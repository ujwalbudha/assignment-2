import time
import os
import signal
import sys

def signal_handler(sig, frame):
    print("Shutting down gracefully...")
    sys.exit(0)

signal.signal(signal.SIGTERM, signal_handler)
signal.signal(signal.SIGINT, signal_handler)

print("Worker service started")
print(f"Database host: {os.getenv('DB_HOST', 'not set')}")

while True:
    print("Worker is running...")
    time.sleep(30)
