
const APP_ID = "YOUR APP ID"
const TOKEN = "YOUR TEMP TOKEN"
const CHANNEL = "YOUR CHANNEL NAME"

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })
let localTracks = []
let remoteUsers = {}
