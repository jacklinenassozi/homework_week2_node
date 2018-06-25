const Contact = require("./Contact.js");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);
const readFileP = util.promisify(fs.readFile);

class ContactList {
    constructor(filename) {
        this.list = [];
        this.filename = filename;
        this.loadedData = [];
    }
    add(contact) {
        if(contact instanceof Contact) {
            this.list.push(contact);
        }
        else 
            console.log("No contact found");
    }
    save() {
        if(this.filename) {
            writeFile(this.filename, JSON.stringify(this.list))
            .then(() => console.log("Contacts Save"))
            .catch(err => console.log(err));
        } else
            console.log("No filenmae supplied"); 
    }
    load() {
        let renderJson = JSON.stringify(fs.readFileSync("contacts.json","utf8"));
        console.log("Render Contacts",renderJson);
    }
};

module.exports = ContactList;