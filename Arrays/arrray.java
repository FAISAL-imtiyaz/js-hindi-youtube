import java.util.*;
import java.io.*;

package Arrays;

public class arrray {
    class pair{
      public int min;
      public int max;
    }
    class Main{
        static pair getMinmax(int arr[],int n){
          pair minmax= new pair();
          Arrays.sort(arr);
          minmax.min=arr[0];
          minmax.max=arr[n-1];
          return minmax;
        }
    
    public static void main(String[] args) {
        int arr[]={2,4,3,2,1,6};
        int n= arr.length;
        pair minmax = getMinmax(arr,n);
        System.out.println("minimum element is" + minmax.min);
        System.out.println("maximim element is"+ minmax.max);

    }
}
}
