"""empty message

Revision ID: 8a7c4ca09bd0
Revises: 86fc4c99e28d
Create Date: 2018-12-28 12:28:00.550384

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8a7c4ca09bd0'
down_revision = '86fc4c99e28d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mei_zhuang',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('img', sa.String(length=256), nullable=True),
    sa.Column('price', sa.String(length=255), nullable=True),
    sa.Column('category', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('img')
    )
    op.create_table('nan_zhuang1',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('img', sa.String(length=256), nullable=True),
    sa.Column('category', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('img')
    )
    op.create_table('nan_zhuang2',
    sa.Column('id', sa.Integer(), autoincrement=True, nullable=False),
    sa.Column('img', sa.String(length=256), nullable=True),
    sa.Column('price', sa.String(length=255), nullable=True),
    sa.Column('category', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('img')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('nan_zhuang2')
    op.drop_table('nan_zhuang1')
    op.drop_table('mei_zhuang')
    # ### end Alembic commands ###
