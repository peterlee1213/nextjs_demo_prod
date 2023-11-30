use test;
create table user (
	user_id int primary key auto_increment,
    email varchar(50) not null unique,
    password varchar(32) not null,
    create_time datetime default now(),
    is_deleted boolean default false,
    is_admin boolean default false
);

create table vpn_plans (
	plan_id int primary key auto_increment,
    name varchar(40) not null unique,
    price int not null,
    duration enum("monthly","annual") not null,
    create_time datetime default now(),
    update_time datetime not null,
    create_user int not null,
    update_user int not null,
    is_deleted boolean default false,
    foreign key(create_user) references user(user_id),
    foreign key(update_user) references user(user_id)
);

create table api_log (
	log_id int primary key auto_increment,
    api_path varchar(100) not null,
    ip varchar(39) not null,
    create_user int not null,
    create_time datetime default null,
    foreign key(create_user) references user(user_id)
);

create table client_buy_plans (
	buy_id int primary key auto_increment,
    user_id int not null,
    plan_id int not null,
    buy_time datetime default now(),
    expire_time datetime not null,
    foreign key(user_id) references user(user_id),
    foreign key(plan_id) references vpn_plans(plan_id)
);

create table seo_info(
	seo_id int primary key auto_increment,
    title varchar(100) not null,
    description varchar(200),
    keyword varchar(200)
);