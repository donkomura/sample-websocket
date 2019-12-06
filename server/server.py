from websocket_server import WebsocketServer
import json

def new_client(client, server):
    server.send_message_to_all(json.dumps('{"connection":1}'))

def send_msg(client, server, message):
    server.send_message_to_all(message)

server = WebsocketServer(9000, host='0.0.0.0')
server.set_fn_new_client(new_client)
server.set_fn_message_received(send_msg)
server.run_forever()