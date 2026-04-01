from fastapi import FastAPI
app=FastAPI()
@app.get("/post")
def home (name:str):
 return { "hi":f"{name}"}