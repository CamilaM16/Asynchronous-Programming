# Asynchronous-Programming

## Blocking Conection
The next video demonstrates a synchronous socket connection, and we can observe that if there are multiple clients, it will only receive messages from the currently connected client. This is because it is designed to handle only one connection at a time.

[Video Blocking](./videos/blocking.webm)

## Non-Blocking Conection

The non-blocking server example that uses sockets and the `select` library to handle multiple connections. It accepts incoming connections, listens for data, and prints it. The server can handle multiple clients concurrently, making it suitable for real-time communication applications. It operates in a non-blocking mode to efficiently manage connections. 

[Video Non-Blocking](./videos/blocking.webm)

***Note:*** Both programs use Ctrl+C to gracefully exit the server.