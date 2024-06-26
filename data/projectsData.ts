interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: "Peter's Mind Vault",
    description: `An extensive personal knowledge management system, as a published linked database with all the references, notes, and insights I’ve collected and refined throughout my life.`,
    imgSrc: '/static/images/mindvault.png',
    href: 'https://notes.peterpeerdeman.nl',
  },
  {
    title: 'Lifely',
    description: `Lifely is a research-led design and technology agency that creates solutions with longevity. Not just solving for now, but solving for good.`,
    imgSrc: '/static/images/lifely.jpg',
    href: 'https://lifely.nl',
  },
  {
    title: 'Snoffeecob',
    description: `A coffeeblog dedicated to my journey into the world of specialty coffee, and the different methods of brewing espresso and pourover, written with NodeJS & Gatsby`,
    imgSrc: '/static/images/snoffeecob.png',
    href: 'https://snoffeecob.com',
  },
  {
    title: 'Kubernetes Cluster',
    description: `Learning by building my own kubernetes cluster with 4 Raspberry pi nodes in a breaker box panel`,
    imgSrc: '/static/images/cluster.jpg',
    href: '/blog/kubernetes-cluster-build-with-raspberry-pi-and-poe-hats',
  },
  {
    title: 'Timeseries & Quantified Self',
    description: `The collection of timeseries data of about any (digital) aspect of my life, including but not limited to health, parking, notes, gaming, devices data, gaming, finance using NodeJS, influxdb, grafana`,
    imgSrc: '/assets/images/2022-02-15-timeseries-prediction-review.png',
    href: '/blog/rasplogger-influxdb-grafana-dashboards-showcase',
  },
  {
    title: 'Electronic Music Visualisation',
    description: `Real-time generated visualisations based on midi data to accompany electronic live music sets, written with Processing.`,
    imgSrc: '/static/images/electroniclivesetvisualisation.jpg',
    href: 'https://www.youtube.com/watch?v=qtN9qzKjo_U',
  },
  {
    title: 'Home Automation & Wearable app',
    description: `The creation of an API & wearable app that aggregates all sorts of home automation and statics about lights, thermostat, music, pv, cluster and others. Written with TypeScript & NodeJS`,
    imgSrc: '/static/images/raspapi-fitbit.jpg',
    href: 'https://github.com/peterpeerdeman/fitbit-raspi',
  },
  {
    title: 'Recordfairs',
    description: `An automatic aggregation overview of vinyl record fairs happening in the Netherlands written in NodeJS, deployed on Kubernetes cluster`,
    imgSrc: '/static/images/recordfairs.png',
    href: 'https://recordfairs.hashbang.nl',
  },
  {
    title: 'Wisdoms',
    description: `A platform to record the wisdoms and quotes you've stumbled upon and share them with the world, originally written in Ruby on Rails, now discontinued`,
    imgSrc: '/static/images/wisdoms.png',
    href: 'https://github.com/peterpeerdeman/wisdoms',
  },
  {
    title: 'NiftySystems',
    description: `A collection of creative technology projects in collaboration with Timen Olthof`,
    imgSrc: '/static/images/niftysystems.png',
    href: 'https://niftysystems.nl/',
  },
]

export default projectsData
