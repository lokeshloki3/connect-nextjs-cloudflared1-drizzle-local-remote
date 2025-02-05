CREATE TABLE `usersInfo` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `usersInfo_email_unique` ON `usersInfo` (`email`);