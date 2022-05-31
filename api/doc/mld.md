# MLD

user(id, lastname, firstname, email, password)
animal(id, breed, dress, name, birth, icad, sex, veterinary, #user(id), #species(id))
species(id, name)
event(id, title, description, date, #tag(id), #animal(id))
tag(id, name)
tips(id, description, #species(id))
