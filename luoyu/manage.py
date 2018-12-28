from flask_migrate import MigrateCommand
from flask_script import Manager

from APP import appname

app = appname()
manager = Manager(app)
manager.add_command('db',MigrateCommand)

if __name__ == '__main__':
    manager.run()
