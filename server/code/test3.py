from models.photo import Photo
from models.comments import Comment
from database import Database

Database.initialize()

photo = Photo(author='Mo', description='love mountains')

photo.new_comment()
photo.save_to_mongo()
from_database = Photo.get_from_mongo(photo.id)

print(photo.get_posts())
