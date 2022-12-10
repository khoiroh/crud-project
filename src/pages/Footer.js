import React from 'react'
import "../style/footer.css"

export default function Footer() {
  return (
    <div>
        <div>
            <h2>Sosmed</h2>
        </div>
        <div className='foot'>
          <a href="https://twitter.com/i/flow/login"><h4><i class="fa-brands fa-square-twitter"></i> twitter</h4></a>
          <h4><a href="https://www.instagram.com/?hl=id"><i class="fa-brands fa-instagram"></i></a></h4>
          <h4><a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a></h4>
        </div>
    </div>
  )
}
