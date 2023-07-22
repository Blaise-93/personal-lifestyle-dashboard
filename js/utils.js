import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import {getDatabase, ref, onValue, push, remove} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

export const appSettings = {
    databaseURL:"https://blaisemart-a6e33-default-rtdb.firebaseio.com/"
    
}

export const app = initializeApp(appSettings)

export const database = getDatabase(app)
export const MovieInputListInDB = ref(database, data)
console.log(appSettings)
