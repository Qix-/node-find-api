/*
	This is some test docs
*/

#define FOOBEAR 1234

/* undoc'd function
*/
const char *hello_world(void) {
	return 1234;
}


/**
	Documented function.
*/
struct some_struct_t_ ****my_test_func(int a, uint32_t b) {
	return a + b;
}

/**
	Documented function.
	with multiple lines
*/
struct some_struct_t_
****my_test_func
(int a, uint32_t b) {
	return a + b;
}

/**
 * Documented function.
 * with multiple lines
 * and stars!
 *
 * And a new paragraph!
 */
struct some_struct_t_ ****my_test_func(int a, uint32_t b) {
	return a + b;
}

/**
	Documented bare function.

	And a new paragraph!
*/
struct some_struct_t_ ****my_test_func(int a, uint32_t b) {
	return a + b;
}
