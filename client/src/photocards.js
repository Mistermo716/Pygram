import React from 'react';
import { connect } from 'react-redux';
import { getPhotos } from './actions/index';
import './photocards.css';

class Photocards extends React.Component {
  componentWillMount() {
    this.props.getPhotos();
  }

  render() {
    console.log(this.props.photos);
    const photos = this.props.photos.map(photo => {
      return (
        <li className="card-container" key={photo.id}>
          <div>
            <h3>{photo.username}</h3> <span>{photo.date}</span>
            <img alt="product" src={photo.url} />
            <p>{photo.description}</p>
          </div>
        </li>
      );
    });

    return <ul>{photos}</ul>;
  }
}

const mapStateToProps = state => ({
  photos: state.photos.items,
});

export default connect(mapStateToProps, { getPhotos })(Photocards);
