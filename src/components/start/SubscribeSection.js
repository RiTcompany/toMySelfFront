import React from 'react'

import '../../css/components/_subscribe.scss'
import '../../css/components/_classes.scss'
import '../../css/global/_boilerplate.scss'

function SubscribeSection() {
  return (
    <div>
            <div class="subscribe">
            <div class="text">
                <h1>Subscribe</h1>
                <p>To Our Email Newsletter And Expert Blog</p>
            </div>
            <div class="input">
                <input type="email" placeholder="Emili@gmail.com" name="subscribe_email" class="input_email"/>
                <button type="submit" class="btn">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default SubscribeSection