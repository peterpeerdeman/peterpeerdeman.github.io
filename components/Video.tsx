type Props = {
  id: string
}

export default function Video({ id }: Props) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://player.vimeo.com/video/${id}?h=7f7f1bd9e7&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        title={`video ${id} on vimeo`}
      ></iframe>
    </div>
  )
}
