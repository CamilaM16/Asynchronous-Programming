import socket

def main():
    host = socket.gethostname()
    port = 12345
    
    # create a TCP/IP
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    	# bind the socket to the port
    	sock.bind((host, port))
    	sock.listen(5)
    	print("Server Started...")
    	
    	while True:
    		conn, addr = sock.accept()
    		
    		print("conected by "+ str(addr))
    		while True:
    		    data = conn.recv(1024)
    		    if not data:
    		    	break
    		    print(data)
    		    
if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nKeyboardInterrupt: (Server-side) BYE :) ...")
