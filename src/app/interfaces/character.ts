export interface Character {
    "id": number,
    "name": string,
    "status": string,
    "species": string,
    "type": string,
    "gender": string,
    "origin": {
      "name": string,
      "url": string,
    },
    "location": Location,
    "image": string,
    "episode": [
        string,
    ],
    "url":string,
    "created": string,
}

interface Location{
    "name": string,
    "url":string
}
