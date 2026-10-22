-- People for Honor - Seed Data (from MySQL dump)

-- Events (4 rows from actual production data)
INSERT OR IGNORE INTO events (id, title, event_date, event_time, location, description, link, status, cta1_label, cta1_url, cta2_label, cta2_url) VALUES
(1, 'African Caribbean Cultural Dance Exchange', '2025-11-22', '1:00 PM - 4:00 PM', '33 Quill Street, Ottawa', 'Monthly community dance exchange celebrating culture, joy, and connectedness.', '/african-caribbean-cultural-dance-exchange', 'active', NULL, NULL, NULL, NULL);

INSERT OR IGNORE INTO events (id, title, event_date, event_time, location, description, link, status, cta1_label, cta1_url, cta2_label, cta2_url) VALUES
(3, 'Cultural', '2025-11-22', '6:00 PM - 9:00 PM', 'Lansdowne Park', 'An evening of music, food, and connection for newcomers and community members.', '', 'active', NULL, NULL, NULL, NULL);

INSERT OR IGNORE INTO events (id, title, event_date, event_time, location, description, link, status, cta1_label, cta1_url, cta2_label, cta2_url) VALUES
(9, 'Entrepreneurship Launchpad', '2025-11-30', '6:00 PM - 9:00 PM', 'Ottawa', 'An evening where emerging entrepreneurs pitch their ideas live. Participants include graduates of our Entrepreneurship Launchpad program and community members who want to join the next cohort. We invite funders, community partners, and angel investors to listen, offer feedback, and explore possible support.', NULL, 'active', 'Register to Attend Pitch Night', 'https://deeppink-crow-833210.hostingersite.com/events?event=pitch-night&type=attend', 'Register to Pitch Your Business', 'https://deeppink-crow-833210.hostingersite.com/events?event=pitch-night&type=pitch');

INSERT OR IGNORE INTO events (id, title, event_date, event_time, location, description, link, status, cta1_label, cta1_url, cta2_label, cta2_url) VALUES
(10, 'Computer Distribution and Usage Tutorial', '2026-01-05', '2.00PM', 'Ottawa', 'All programs are open for registration', NULL, 'active', NULL, NULL, NULL, NULL);

-- Contact Messages (28 rows from actual production data)
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(3, 'test', 'test', 'test@gmail.com', '123657890', 'general', 'test', '2025-12-23 08:24:38');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(4, 'test', 'test', 'test@gmail.com', '1236547890', 'dance', 'test', '2025-12-23 08:30:16');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(5, 'Daniel', 'Wright', 'daniel.wright@jmailservice.com', '8054002077', 'barbershop', 'Most businesses struggle to get noticed online. We solve that by putting your brand above the competition on major search pages for the exact keywords your customers are typing.
Setup takes less than a day, and you''ll start seeing traffic immediately in your analytics.
Would you like me to send a few keyword suggestions for your business?', '2025-12-31 06:20:38');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(6, 'test', 'test', 'test@test.com', '111111111111', 'general', 'test', '2026-01-13 05:18:42');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(7, 'Daniel', 'Wright', 'daniel.wright@jmailservice.com', '8054002077', 'barbershop', 'Most businesses struggle to get noticed online.', '2026-01-13 05:48:53');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(8, 'David', 'Turner', 'david.turner@jmailservice.com', '8054002077', 'barbershop', 'Imagine your brand appearing first when customers search online.', '2026-01-24 00:14:15');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(9, 'Marcus', 'Palmer', 'marcus.palmer@jmailservice.com', '8054002077', 'barbershop', 'We make it easy for your business to be seen first and chosen first.', '2026-02-12 23:51:18');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(10, 'Dhruvil', 'Shah', 'test@test.com', '111111111111', 'barbershop', 'test', '2026-02-24 12:50:53');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(11, 'Rosine', 'Kamariza', 'rntambutso@yahoo.com', NULL, 'sewing', 'I want to learn how to sew', '2026-02-28 18:37:15');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(12, 'Ndayishimiye', 'Devote', 'ndadevote48@gmail.com', '2042986498', 'sewing', 'je vais apprendre à coudre', '2026-02-28 18:37:42');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(13, 'Joseph', 'Matthews', 'joseph.matthews@jmailservice.com', '8054002077', 'barbershop', 'We help businesses dominate their local market online.', '2026-03-01 21:00:25');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(14, 'Dhruvil', 'Shah', 'test@test.com', '1111111111', 'barbershop', 'test', '2026-03-06 07:36:50');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(15, 'Jonathan', 'Pierce', 'jonathan.pierce@jmailservice.com', '8054002077', 'barbershop', 'If someone is searching for your exact service right now... are they finding you or your competitor?', '2026-03-14 15:04:54');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(16, 'Adewale', 'Adeyemi', 'deway1973@yahoo.com', '4384546124', 'dance', 'I like and lov it', '2026-03-21 17:53:18');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(17, 'Kaman Angala', 'Whitehouse patbol', 'patbolkaman82@gmail.com', '6137966433', 'general', 'Y''a t-il d''autres options sur les intérêts liées au service?', '2026-03-21 19:45:17');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(18, 'Patrick', 'Donovan', 'patrick.donovan@jmailservice.com', '8054002077', 'barbershop', 'We place your business in front of people actively searching for your services.', '2026-04-03 01:21:28');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(19, 'Raymond', 'Abbott', 'raymond.abbott@jmailservice.com', '8054002077', 'barbershop', 'This will be my last email.', '2026-04-16 17:30:33');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(20, 'Andrew', 'Collins', 'andrew.collins@jmailservice.com', '8054002077', 'barbershop', 'Our system drives targeted traffic to your website within 24 hours of setup.', '2026-05-10 21:10:15');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(21, 'Abiodun', 'Kelani', 'biodunkelani2984@gmail.com', '4374510621', 'general', 'Leaning towards', '2026-05-11 04:54:59');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(22, 'Daniel', 'Wright', 'daniel.wright@jmailservice.com', '8054002077', 'barbershop', 'We specialize in putting businesses like yours right at the top of search results.', '2026-05-24 04:24:40');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(23, 'Thomas', 'Walker', 'thomas.walker@jmailservice.com', '8054002077', 'barbershop', 'We help businesses dominate their local market online.', '2026-06-15 23:37:55');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(24, 'Thomas', 'Walker', 'thomas.walker@jmailservice.com', '8054002077', 'barbershop', 'We make it easy for your business to be seen first and chosen first.', '2026-07-05 19:50:31');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(25, 'Stephen', 'Morrison', 'stephen.morrison@jmailservice.com', '8054002077', 'barbershop', 'We''ve developed a unique advertising platform.', '2026-08-05 04:07:46');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(26, 'Daniel', 'Wright', 'daniel.wright@jmailservice.com', '8054002077', 'barbershop', 'Within 24 hours, we can have your brand appearing when people search for your top keywords.', '2026-09-05 09:03:41');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(27, 'Joseph', 'Matthews', 'joseph.matthews@jmailservice.com', '8054002077', 'barbershop', 'Imagine showing up first every time someone searches for your type of service.', '2026-09-06 17:37:29');
INSERT OR IGNORE INTO contact_messages (id, first_name, last_name, email, phone, service, message, created_at) VALUES
(28, 'Goal', 'Hqbaaoxbo', 'huj.ow.a.c.e.v86@gmail.com', '5558257813', 'barbershop', '5625426545', '2026-09-13 21:33:56');

-- Join Submissions (4 rows from actual production data)
INSERT OR IGNORE INTO join_submissions (id, email, full_name, interests, created_at) VALUES
(3, 'test@test.com', 'John Doe', 'test', '2026-01-13 05:06:24');
INSERT OR IGNORE INTO join_submissions (id, email, full_name, interests, created_at) VALUES
(4, 'test@test.com', 'test', 'test', '2026-01-13 05:09:12');
INSERT OR IGNORE INTO join_submissions (id, email, full_name, interests, created_at) VALUES
(5, 'biodunkelani2984@gmail.com', 'Kelani Abiodun Gafar', 'Leaning a nw skill', '2026-05-11 04:54:33');
INSERT OR IGNORE INTO join_submissions (id, email, full_name, interests, created_at) VALUES
(6, 'huj.ow.a.c.e.v86@gmail.com', 'Diqxzt Mhqyxwge', '3657535784', '2026-09-13 21:34:11');
