from websocket import create_connection
import logging
import json
import time

filename = "data.txt"

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter(' %(module)s -  %(asctime)s - %(levelname)s - %(message)s'))
logger.addHandler(handler)

ws = create_connection("ws://0.0.0.0:9000")
logger.info("Open")

with open(filename, 'r') as f:
    for line in f:
        print(line)
        send_data = json.dumps(line)
        ws.send(send_data)
        logger.info("Sent")
        logger.info("Receiving...")
        result = ws.recv()
        logger.info("Received '{}'".format(result))
        time.sleep(1)

ws.close()
logger.info("Close")