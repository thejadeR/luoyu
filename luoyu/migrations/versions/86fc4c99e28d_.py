"""empty message

Revision ID: 86fc4c99e28d
Revises: 
Create Date: 2018-12-28 10:22:53.944159

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '86fc4c99e28d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.String(length=256), nullable=False),
    sa.Column('name', sa.String(length=30), nullable=True),
    sa.Column('password', sa.String(length=255), nullable=True),
    sa.Column('email', sa.String(length=50), nullable=True),
    sa.Column('is_check', sa.Boolean(), nullable=True),
    sa.Column('token', sa.String(length=256), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    # ### end Alembic commands ###
