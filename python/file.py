def rwfile(input_file, output_file):
    try:
     
        with open(input_file, 'r') as infile:
            content = infile.read()
        
      
        modified_content = content.upper()

       
        with open(output_file, 'w') as outfile:
            outfile.write(modified_content)
        
        print(f"File has been successfully written to {output_file}")

    except FileNotFoundError:
        print(f"Error: The file {input_file} was not found")
    except IOError:
        print(f"Error: Could not read/write the file")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


input_file = r'C:\Users\tracy\plp-assignments\python\input.txt'
output_file = r'C:\Users\tracy\plp-assignments\python\output.txt'
rwfile(input_file, output_file)