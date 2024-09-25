#include <iostream>
using namespace std;

int main() {
    // Creating a simple array
    int arr[3] = {10, 20, 30};

    // Accessing array elements
    cout << arr[0] << endl; // Output: 10

    // Attempting to add a non-numeric property (This will not work in C++)
    // arr.customProperty = "Hello"; // This will cause a compilation error

    // Iterating over the array elements
    for (int i = 0; i < 3; i++) {
        cout << arr[i] << endl; // Outputs: 10, 20, 30
    }

    return 0;
}
