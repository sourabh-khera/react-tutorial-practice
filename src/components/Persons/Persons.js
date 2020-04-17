import React from 'react';
import Person from './Person/Person';
import withClass from '../../hoc/withClass';

const persons = (props) => {
  return props.persons.map((p, id) => {
    return <Person
      key={p.id}
      name={p.name}
      age={p.age}
      click={() => props.click(p.id)}
      change={(event) => props.change(event, p.id)}
    />
  }
 )
}

export default withClass(persons);