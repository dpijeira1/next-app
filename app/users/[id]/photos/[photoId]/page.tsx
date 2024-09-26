interface Props {
  params: { id: number; photoId: number };
}

const PhotosPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      PhotosForUser {id} {photoId}
    </div>
  );
};

export default PhotosPage;
