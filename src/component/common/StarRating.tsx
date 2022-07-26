import { Rating } from 'react-simple-star-rating'

export default function StarRating(props: any) {
    // rating value is in respective to 10 that's why multiplied by 20
    return (
        <Rating ratingValue={parseInt(props.rating) * 20} readonly={true} fillColor={'black'} />
    )
}