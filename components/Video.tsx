type Props = {
  id: string
  mediaprovider: 'youtube' | 'vimeo'
}

export default function Video({ id, mediaprovider }: Props) {
  switch (mediaprovider) {
    case 'youtube':
      return (
        <iframe
          width="640"
          height="480"
          src={`https://www.youtube.com/embed/${id}`}
          title={`video ${id} on youtube`}
        ></iframe>
      )
    case 'vimeo':
      return (
        <iframe
          width="640"
          height="480"
          src={`https://player.vimeo.com/video/${id}?h=7f7f1bd9e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
          title={`video ${id} on vimeo`}
        ></iframe>
      )
  }
}
