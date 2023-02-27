import Person from './Person';
import persons from '../data/persons';

export default function Persons() {
  return(
  <div className='cards'>
    {persons.map((person) => <Person key={person.id} {...person} /> )}
  </div>
)}
