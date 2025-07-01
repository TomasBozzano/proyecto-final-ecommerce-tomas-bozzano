import {db} from './firebase.js';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');