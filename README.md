

# mangomusic

November 16, 2020  App Academy SF Cohort

A clone of Apple Music, Mango Music was created to allow the listener to create playlists, browse albums, view artists, and play songs. It is styled based on dark mode, and provides a soothing place to go for after-work relaxation.

*Copyright disclaimer: I hold the rights to use all audio as they are recordings of myself and my groups. 

## See it in action!
[Mango Music Live](https://mango-music.herokuapp.com/#/)

Table of Contents
* [Features](https://github.com/Chubbibanana/mangomusic/#features)
* [Splash](https://github.com/Chubbibanana/mangomusic/#splash)
* [Playlists](https://github.com/Chubbibanana/mangomusic/#playlists)
* [Song Displays](https://github.com/Chubbibanana/mangomusic/#song-displays)
* [Artists](https://github.com/Chubbibanana/mangomusic/#artists)
* [Build](https://github.com/Chubbibanana/mangomusic/#built-with)
## Features
* Quick and easy User Authentication
* Music Playback/ Pause
* Playlist creation/ editing
* Browse album or artist pages
* Sidebar for quick navigation
* Searchable by Song, Album, or Artist


### Splash
![Splash](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/splash.png)
* Fixed banner for signing up
* Login button for the already initiated
* An 'upsell' splash page

### Playlists
![Playlist](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/ReademeVid.gif)
* Song add/delete
* Smooth navigation between playlists
* Updating the playlist title was tricky due to props and state needing to be different, this was achieved with ComponentWillReceiveProps
* ```
    constructor(props) {
        super(props);
        this.state = this.props.playlist;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePlaylist(this.state);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.playlist);
        // this.setState(nextProps.playlist);
    }
    
    update(name) {
        return e => this.setState({ name: e.currentTarget.value});
    }
### Song Displays
All same-component lists are styled using CSS grid layout. 
* Ability to play/pause directly from the song item
* Manipulating audio not using VanillaDOM but rather, React's inbuilt refs
* Challenge to have the information loaded into the player bar be consistent with the song items to click
* Handled the audio load in the actual player bar, and only passed song information into it on click
* Because Mango Music does not use HTML5's inbuilt controls, I had to figure out a way to toggle the play and pause, while sending that information to my songs item component

* ```
       componentDidUpdate(prevProps) {
         if (prevProps.playState !== this.props.playState || 
             prevProps.currentSong !== this.props.currentSong) {
           if (this.props.playState) {
             this.audio.current.play();
           } else {
             this.audio.current.pause();
           }
         }
       }

       toggle() {
           this.props.togglePlayState(this.props.currentSong.id);
       }
       
* In albums, ability to add to any of the user-owned playlists
* Display window maintains info even if navigating to different page

![SongIndex](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/indexsong.png)
![SongAlbum](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/albumsong.png)
- Song Information Window


![SongInformation](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/songinformation.png)

### Artists
![Artistpage](https://github.com/Chubbibanana/mangomusic/blob/main/app/assets/images/readme/artistshow.png)
* Artist page displays the artist profile and their albums
* Navigate to albums in 1 click
## Built with
Mango Music uses a Rails background and a React frontend to quickly display relevant information without having to rerender 
the entire page, allowing for a smooth user experience and navigation between pages.


## To-do
* ~~Navigation controls and volume slider besides play/pause~~
* ~~Searching database~~
* More playing functionality, such as add to queue/ remove from queue
* Playlist deletion
* User Library
* Add mobile scaling
