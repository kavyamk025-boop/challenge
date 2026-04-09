from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

names = []

class User(BaseModel):
    name: str

# ✅ CREATE (same as before)
@app.post("/")
def rec_dta(user: User):
    if user.name in names:
        return {"msg": "You are already registered"}
    else:
        names.append(user.name)
        return {"msg": "welcomeYou"}

# ✅ UPDATE (change name)
@app.put("/")
def update_name(old: str, new: str):
    if old in names:
        index = names.index(old)
        names[index] = new
        return {"msg": "Name updated"}
    else:
        return {"msg": "User not found"}

# ✅ DELETE
@app.delete("/")
def delete_user(name: str):
    if name in names:
        names.remove(name)
        return {"msg": "User deleted"}
    else:
        return {"msg": "User not found"}