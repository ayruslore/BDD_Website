from bottle import Bottle, route, run, response

app=Bottle()

@app.hook('after_request')
def enable_cors():
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Access-Control-Allow-Methods'] = 'PUT, GET, POST, DELETE, OPTIONS'
    response.headers['Access-Control-Allow-Headers'] = 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token'

@app.route('/write/<jsonMenu>')
def updateMenu(jsonMenu):
    file=open("BabaDaDhaba.js", "w")
    file.write("var DATA=")
    jsonMenu=jsonMenu.replace('[', '#\n[')
    dat=jsonMenu.split('#')
    stri=""
    for i in range(len(dat)):
        stri=stri+dat[i]
    file.write(stri)
    file.close()
    return stri

run(app, host='localhost', port=4040, debug=True)
