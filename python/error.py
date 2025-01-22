def get_filename_and_read():
    filename = input("Enter filename: ")

    try:
        
        with open(filename, 'r') as file:
            content = file.read()
        print("File content:")
        print(content)

    except FileNotFoundError:
        print(f"Error: The file {filename} does not exist.")

    except PermissionError:
        print(f"Error: You do not have permission to read {filename}.")

    except IOError:
        print(f"Error: Could not read the file {filename}.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")


get_filename_and_read()