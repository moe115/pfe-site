from tensorflow import keras

import matplotlib.pyplot as plt
from PIL import Image
import numpy as np
import io

from fastapi import FastAPI , File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:3000",
    # Add more allowed origins as needed
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)
# Example endpoint for GET request
@app.get("/items/")
def read_item():
    name=image_name()
    return {"item_id": name}

# Example endpoint for POST request
@app.post("/items/")
async def create_item( file: UploadFile = UploadFile(...)):
    contents = await file.read()
    image = Image.open(io.BytesIO(contents)).resize((224, 224))
    image = np.array(image) / 255.0
    image = np.reshape(image, (1, 224, 224, 3))
    name=image_name(image)
    return {"filename": name}


def image_name(image):

    prediction = model.predict(image)
    predicted_class_index = np.argmax(prediction)
    animal_name = get_animal_name(predicted_class_index)
    return animal_name

model = keras.models.load_model("C:/Users/moudi/model2.h5")

def get_animal_name(number):
    animals = [
        "Antelope", "Badger", "Bat", "Bear", "Bee", "Beetle", "Bison", "Boar", "Butterfly", "Cat",
        "Caterpillar", "Chimpanzee", "Cockroach", "Cow", "Coyote", "Crab", "Crow", "Deer", "Dog",
        "Dolphin", "Donkey", "Dragonfly", "Duck", "Eagle", "Elephant", "Flamingo", "Fly", "Fox",
        "Goat", "Goldfish", "Goose", "Gorilla", "Grasshopper", "Hamster", "Hare", "Hedgehog",
        "Hippopotamus", "Hornbill", "Horse", "Hummingbird", "Hyena", "Jellyfish", "Kangaroo",
        "Koala", "Ladybugs", "Leopard", "Lion", "Lizard", "Lobster", "Mosquito", "Moth", "Mouse",
        "Octopus", "Okapi", "Orangutan", "Otter", "Owl", "Ox", "Oyster", "Panda", "Parrot",
        "Pelecaniformes", "Penguin", "Pig", "Pigeon", "Porcupine", "Possum", "Raccoon", "Rat",
        "Reindeer", "Rhinoceros", "Sandpiper", "Seahorse", "Seal", "Shark", "Sheep", "Snake",
        "Sparrow", "Squid", "Squirrel", "Starfish", "Swan", "Tiger", "Turkey", "Turtle",
        "Whale", "Wolf", "Wombat", "Woodpecker", "Zebra"
    ]
    
    if 0 <= number <= len(animals):
        return animals[number]



# Preprocess the image



# print(f"Predicted class: {animal_name}")
# plt.imshow(image[0])
# plt.axis('off')
# plt.show()
