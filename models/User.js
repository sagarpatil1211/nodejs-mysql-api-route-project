const { resolve } = require("path");
let Database = require("./Database")
class User {
    constructor() {
        this.id = 0;
        this.name = "";
        this.emial = "";
        this.mobileno = "";
        this.db = new Database();
        this.sql = "";

    }

    post = ()=>{
        if(this.id == 0){
            this.sql =  `INSERT INTO users( name, email, mobileno) `
            this.sql += `VALUES ('${this.name.replace(/'/g, "''")}',`
            this.sql += `'${this.email.replace(/'/g, "''")}','${this.mobileno}')`;
        }
        else{
            this.sql = `UPDATE users SET name='${this.name.replace(/'/g, "''")}',email='${this.email.replace(/'/g, "''")}',mobileno='${this.mobileno}' WHERE id = ${this.id}`
        }
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    list(){
        this.sql = `SELECT * FROM users`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    get(){
        this.sql = `SELECT * FROM users WHERE id = ${this.id}`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    
    delete(){
        this.sql = `DELETE FROM users WHERE  id = ${this.id}`
        return new Promise((resolve,reject)=>{
            this.db.query(this.sql).then(result=>{
                resolve(result)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    



}

module.exports = User;