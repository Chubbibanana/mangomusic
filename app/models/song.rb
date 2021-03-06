class Song < ApplicationRecord
    validates :name, :album_id, :track_number, presence: true
    validates :name, uniqueness: true
    validates :album_id, uniqueness: {scope: :name}

    belongs_to :album,
        foreign_key: :album_id,
        class_name: :Album

    has_many :playlist_songs,
        foreign_key: :song_id,
        class_name: :PlaylistSong
        
    has_many :playlists,
        through: :playlist_songs,
        source: :playlist

    has_one :artist,
        through: :album,
        source: :artist
        
    has_one_attached :audio
end
