import uuid
from database import Database
import datetime


class Comment(object):
    def __init__(self, photo_id, content, author, date=datetime.datetime.utcnow(), id=None):
        self.content = content
        self.author = author
        self.photo_id = photo_id
        # generate new id random hex else get the id passed in
        self.id = uuid.uuid4().hex if id is None else id
        self.date = date

    def save_to_mongo(self):
        # pass self into database class
        # which contains the jsonified data from function below
        Database.insert(collection='comments', data=self.json())

    def json(self):
        return {
            'id': self.id,
            'photo_id': self.photo_id,
            'content': self.content,
            'author': self.author,
            'date': self.date
        }

    @classmethod
    def from_mongo(cls, id):
        comment_data = Database.find_one(
            collection='comments', query={'id': id})
        return cls(photo_id=comment_data['photo_id'],
                   content=comment_data['content'],
                   author=comment_data['author'],
                   date=comment_data['date'],
                   id=comment_data['id'])

    @staticmethod
    def from_blog(id):
        return [comment for comment in Database.find(collection='comments', query={'photo_id': id})]
