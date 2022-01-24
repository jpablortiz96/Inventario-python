from flask import Flask, render_template, request, flash
import utils
import os
import yagmail
import inventory 

app = Flask(__name__)

app.secret_key = os.urandom(24)

@app.route('/')
def login():
    return render_template('index.html')

@app.route('/recuperar')
def recuperar():
    return render_template('recuperar.html')

@app.route('/main')
def principal():
    IDs=[1,2,3,4,5,6,7,8,9]
    inventory1=[inventory.Inventory(i, "Producto "+str(i), 2000) for i in IDs]
    return render_template('principal.html', inventory=inventory1)

@app.route('/agregar')
def agregar():
    return render_template('agregar.html')

@app.route('/editar')
def editar():
    return render_template('editar.html')


if __name__ == '__main__':
    app.run(debug=True)