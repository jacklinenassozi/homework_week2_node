const Contact = require("./Contact.js");
  const ContactList = require("./ContactList.js");
  
  let jackie = new Contact("Jackie", 24);
  let ritah = new Contact("ritah", 34, 52501445);
  
  
  console.log(jackie);
  
  jackie.call();
  
  let list = new ContactList("contacts.json");
  
  list.add(jackie);
  list.add(ritah);
  list.add(new Contact("sanyu", 40, 3232323));
  list.load();
  list.save()
  
  ritah.birthday();
  
  console.log(list);