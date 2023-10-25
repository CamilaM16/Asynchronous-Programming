# Asynchronous-Programming

## Blocking Conection
The next video demonstrates a synchronous socket connection, and we can observe that if there are multiple clients, it will only receive messages from the currently connected client. This is because it is designed to handle only one connection at a time.

[VIDEO non-blocking.webm](https://github.com/CamilaM16/Asynchronous-Programming/assets/111623023/3004cd3b-9d0a-41f3-916c-cdacdc88c077)

## Non-Blocking Conection

The non-blocking server example that uses sockets and the `select` library to handle multiple connections. It accepts incoming connections, listens for data, and prints it. The server can handle multiple clients concurrently, making it suitable for real-time communication applications. It operates in a non-blocking mode to efficiently manage connections. 

[VIDEO - blocking.webm](https://github.com/CamilaM16/Asynchronous-Programming/assets/111623023/42ac5e73-4b48-4df9-92c1-2b2231d5d89b)

***Note:*** Both programs use Ctrl+C to gracefully exit the server.
