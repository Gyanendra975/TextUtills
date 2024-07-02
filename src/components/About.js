import React from 'react'

function About(props) {
  return (
    <div className="container" style = {{color: props.mode === 'dark'?'white' :'black'}}>
    <div >
      <p>
      <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
      Assumenda veritatis sequi perspiciatis obcaecati eos id hic corporis aut! Eum earum sequi officia mollitia labore
      quam corrupti a sapiente incidunt non
      </b>
      </p>

    </div>
  </div>

  )
}

export default About;
