import { saveToStorage } from "../util.service.js";
import { storageService } from "../async-storage.service";
import { makeId } from "../util.service";
import { userService } from "../user";


//const STORAGE_KEY = 'station'
const STORAGE_KEY = "stationDemiDb";
 _createStationsFromGivenDemoData();

const demoStation = {
  _id: "1234",
  name: "demo station",
  createdBy: {
    id: "uId",
  },
  songs: [
    // {SongObject1},{Song2}
  ],
};

export const stationService = {
  query,
  getById,
  save,
  remove,
  getDefaultFilter,
  getEmptyStation,
  addSongToStation,
  removeSongFromStation,
};
window.cs = stationService;

const demoUser = {


  _id: makeId(6),
  fullName: "Guest",
  imgUrl: ""
}

function getEmptyStation(){
  return {
    title: "My Playlist",
    description: '',
    img: "/src/assets/imgs/Soundify-files/defaultPlaylistIcon.png",
  
    songs: [
       
    ]
}
}

async function query(filterBy = { txt: "" }) {
  console.log("query from local service was called.");
  var stations = await storageService.query(STORAGE_KEY);
  const { txt } = filterBy;

  if (txt) {
    const regex = new RegExp(filterBy.txt, "i");
    stations = stations.filter((station) => regex.test(station.title));
  }

  return stations;
}

function getById(stationId) {
  const stations = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  const station = stations.find((station) => station._id === stationId);
  return station
}

async function remove(stationId) {
  // throw new Error('Nope')
  await storageService.remove(STORAGE_KEY, stationId);
}

function getDefaultFilter() {
  return {};
}


async function save(station) {
  var savedStation
  if (station._id) {
      const stationToSave = {
          _id: station._id,
          title: station.title,
          description: station.description,
          img: station.img,
          songs: station.songs
      }
      savedStation = await storageService.put(STORAGE_KEY, stationToSave)
  } else {
      const stationToSave = {
        title: station.title,
        img: station.img,
        songs: station.songs,
          // Later, owner is set by the backend
        createdBy: userService.getLoggedinUser() || demoUser
      }
      savedStation = await storageService.post(STORAGE_KEY, stationToSave)
  }
  return savedStation
}

function addSongToStation (stationId,song) {
  const station = getById(stationId)
  const updatedStation = [...station.songs, song]
  save(updatedStation)
  
}

async function removeSongFromStation(stationId, songId) {
  const station = await getById(stationId)
  if (!station || !station.songs) return

  const updatedSongs = station.songs.filter(song => song._id !== songId)
  const updatedStation = { ...station, songs: updatedSongs }

  await save(updatedStation)
}


function _createStationsFromGivenDemoData() {
  console.log("NOTICE - _createStationsFromGivenDemoData was called!!");
  const stations = [
    {
      _id: "OXeMG8wNskc",
      title: "Study Playlist #1",
      img: "/src/assets/imgs/demiDataImgs/study1.png",
      createdBy: {
        _id: "u101",
        fullName: "Lior Cohen",
        imgUrl: "",
      },
      songs: [
        {
          _id: "ghe6r",
          title: "song title a",
          artist: "artist_5",
          album: "album A",
          duration: "3:23",
          url: "",
          addedBy: "",
          addedAt: 14012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg4.png",
        },
        {
          _id: "whegr",
          title: "song title b",
          artist: "artist_8",
          album: "album A",
          duration: "3:34",
          url: "",
          addedBy: "",
          addedAt: 14012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg2.png",
        },
        {
          _id: "olegr",
          title: "song title b0",
          artist: "artist_8",
          album: "album popo",
          duration: "1:24",
          url: "",
          addedBy: "",
          addedAt: 15042025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg3.png",
        },
      ],
    },
    {
      _id: "4XeMfdfNskc",
      title: "Study Playlist #2",
      img: "/src/assets/imgs/demiDataImgs/study2.png",
      createdBy: {
        _id: "u101",
        fullName: "Lior Cohen",
        imgUrl: "",
      },
      songs: [
        {
          _id: "rhe6r",
          title: "song title ao",
          artist: "artist_5",
          album: "album F",
          duration: "2:12",
          url: "",
          addedBy: "",
          addedAt: 14012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg5.png",
        },
        {
          _id: "otjrr",
          title: "song title t6",
          artist: "artist_1",
          album: "album popo",
          duration: "4:24",
          url: "",
          addedBy: "",
          addedAt: 12042025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg2.png",
        },
        {
          _id: "1hegr",
          title: "song title bo",
          artist: "artist_2",
          album: "album T",
          duration: "2:56",
          url: "",
          addedBy: "",
          addedAt: 14012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg4.png",
        },
      ],
    },
    {
      _id: "11eMG8wNskc",
      title: "Workout - slow",
      img: "/src/assets/imgs/demiDataImgs/workout1.png",
      createdBy: {
        _id: "r401",
        fullName: "Moshe Siman Tov",
        imgUrl: "",
      },
      songs: [
        {
          _id: "tye6r",
          title: "song title ai",
          artist: "artist_3",
          album: "album Arr",
          duration: "4:12",
          url: "",
          addedBy: "",
          addedAt: 14012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg4.png",
        },
        {
          _id: "3hegr",
          title: "song title bi",
          artist: "artist_4",
          album: "album yyu",
          duration: "3:33",
          url: "",
          addedBy: "",
          addedAt: 14012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg1.png",
        },
      ],
    },
    {
      _id: "9tr9rG8wNskc",
      title: "Workout - high energy",
      img: "/src/assets/imgs/demiDataImgs/workout2.png",
      createdBy: {
        _id: "r401",
        fullName: "Moshe Siman Tov",
        imgUrl: "",
      },
      songs: [
        {
          _id: "7436y",
          title: "song title hhh",
          artist: "artist_3",
          album: "album ytt",
          duration: "4:31",
          url: "",
          addedBy: "",
          addedAt: 14612025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg1.png",
        },
        {
          _id: "u436r",
          title: "song title byy",
          artist: "artist_4",
          album: "album ryerd",
          duration: "2:44",
          url: "",
          addedBy: "",
          addedAt: 17012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg2.png",
        },
      ],
    },
    {
      _id: "7tyMG8wNskc",
      title: "relax",
      img: "/src/assets/imgs/demiDataImgs/relax.png",
      createdBy: {
        _id: "r401",
        fullName: "Moshe Siman Tov",
        imgUrl: "",
      },
      songs: [
        {
          _id: "7ye6y",
          title: "song title jojo",
          artist: "artist_5",
          album: "album Efe",
          duration: "3:55",
          url: "",
          addedBy: "",
          addedAt: 14612025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg1.png",
        },
        {
          _id: "u8e6r",
          title: "song title bobo",
          artist: "artist_5",
          album: "album Yuy",
          duration: "1:55",
          url: "",
          addedBy: "",
          addedAt: 12012025,
          imgUrl: "/src/assets/imgs/demiDataImgs/songImg5.png",
        },
      ],
    },
  ];
  saveToStorage(STORAGE_KEY, stations);
}
