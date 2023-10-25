import socket
import sys
import time

def main() -> None:
    host = socket.gethostname()
    port = 12345

    # Create a TCP/IP socket
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    
        while True:
            try:
            	sock.connect((host, port))
            	while True:
                    message = sys.argv[1]
                    data = str.encode(message)
                    sock.send(data)
                    print("Send Message...")
                    time.sleep(5)
                
            except ConnectionRefusedError:
                time.sleep(2)
                print("Connection to the server failed. Retrying in 1 second...")

if __name__ == "__main__":
    assert len(sys.argv) > 1, "Please provide a message"
    try:
        main()
    except KeyboardInterrupt:
        print("\nKeyboardInterrupt: BYE :) ...")

