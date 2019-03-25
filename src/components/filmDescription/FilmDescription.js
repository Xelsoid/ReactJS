import React from 'react';

import './filmdescription.scss';

const FilmDescription = () => (
    <div className='film-description clearfix'>
      <div className='film-description__image-wrapper'>
        <img className='film-description__image' src='https://via.placeholder.com/300x400'/>
      </div>
      <div className='film-description__info-wrapper'>
        <h2 className='film-description__header' >Pulp Fiction</h2>
        <strong className='film-description__useful-info display-block'>Oscar-winning Movies</strong>
        <span>Year</span>
        <span>154 min</span>
        <p className='film-description__narration'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eveniet expedita explicabo minus nemo,
          nisi obcaecati placeat quasi quisquam rerum suscipit temporibus, voluptates. Blanditiis, minima, tenetur!
          Atque eius iste quasi quidem voluptatibus. Alias corporis fugiat quo, totam unde voluptas! Consequuntur ea
          inventore natus nihil, numquam placeat repellat vero? Et.
        </p>
        <p className='film-description__narration'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eveniet expedita explicabo minus nemo,
          nisi obcaecati placeat quasi quisquam rerum suscipit temporibus, voluptates. Blanditiis, minima, tenetur!
          Atque eius iste quasi quidem voluptatibus. Alias corporis fugiat quo, totam unde voluptas! Consequuntur ea
          inventore natus nihil, numquam placeat repellat vero? Et.
        </p>
        <p className='film-description__narration'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus eveniet expedita explicabo minus nemo,
          nisi obcaecati placeat quasi quisquam rerum suscipit temporibus, voluptates. Blanditiis, minima, tenetur!
          Atque eius iste quasi quidem voluptatibus. Alias corporis fugiat quo, totam unde voluptas! Consequuntur ea
          inventore natus nihil, numquam placeat repellat vero? Et.
        </p>
      </div>
    </div>
);

export default FilmDescription;