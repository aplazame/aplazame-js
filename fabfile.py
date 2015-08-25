from fabric.api import env, run, settings
from fabric.context_managers import cd


settings.project_path = '/opt/checkout-js'
settings.project_name = 'aplazame-js'

env.shell = '/bin/zsh -l -i -c'
env.key_filename = '~/.ssh/id_rsa'


def prod():
    env.user = 'hobbes'
    env.hosts = ['aplazame.com']


def echo():
    with cd(settings.project_path):
        run('make echo')


def deploy():
    with cd(settings.project_path):
        run('git pull origin master')
