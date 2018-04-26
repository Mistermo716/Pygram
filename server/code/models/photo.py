import uuid
from database import Database
from models.comments import Comment


class Photo(object):
    def __init__(self, author, description, id=None):
        self.author = author
        self.description = description
        self.id = uuid.uuid4().hex if id is None else id

    def new_comment(self):
        content = input('Enter comment: ')
        comment = Comment(photo_id=self.id,
                          content=content,
                          author=self.author)
        comment.save_to_mongo()

    def get_posts(self):
        return Comment.from_blog(self.id)

    def save_to_mongo(self):
        Database.insert(collection='photos', data=self.json())

    def json(self):
        return {
            'author': self.author,
            'description': self.description,
            'id': self.id
        }

    @classmethod
    def get_from_mongo(cls, id):
        photo_data = Database.find_one(collection='photos',
                                       query={'id': id})
        return cls(author=photo_data['author'],
                   description=photo_data['description'],
                   id=photo_data['id'])
